import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "@/services/api";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setLoading(true);
     

      const response = await api.post("/auth/register", formData);
      
      toast.success(response.data.message);

      navigate("/login");

    } catch (error) {

      
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">

        <CardHeader>
          <CardTitle className="text-center text-3xl text-white">
            Create Account
          </CardTitle>
        </CardHeader>

        <CardContent>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <Label className="text-white">Full Name</Label>

              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="text-white"
              />
            </div>

            <div>
              <Label className="text-white">Email</Label>

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="text-white"
              />
            </div>

            <div>
              <Label className="text-white">Password</Label>

              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="text-white"
              />
            </div>

            <Button
              type = "submit"
              className="w-full bg-violet-600 hover:bg-violet-700"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register"}
            </Button>

          </form>

          <p className="mt-6 text-center text-zinc-400">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-violet-500 hover:underline"
            >
              Login
            </Link>

          </p>

        </CardContent>

      </Card>

    </div>
  );
}

export default Register;