import { Button } from "@/components/ui/button";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Aquatic Life - User Registration</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Registration Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Register New User</h2>
            <RegisterForm />
          </div>
          
          {/* Payload Structure Documentation */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Registration Payload Structure</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Required Fields:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-2">API Endpoint:</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  POST /api/auth/register
                </code>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Response Structure:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "message": "User created successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "customer"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
