import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
      {/* Card 1 */}
      <Card className="w-full md:w-1/3 border rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>Day to Day Accounting + MIS reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Reliable bookkeeping to cover your financial reporting needs with
            100% compliance.
          </p>
          <p className="mt-4 text-3xl font-bold">
            ₹4200 <span className="text-lg">per month</span>
          </p>
          <p className="text-sm text-gray-500">billed annually</p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>✔ Toola Accounting Software</li>
            <li>✔ Dedicated customer success manager & accountant</li>
            <li>✔ Weekly/monthly bookkeeping</li>
            <li>✔ P&L, balance sheets</li>
            <li>✔ Ledger & MIS reports</li>
            <li>✔ Personalized compliance calendar</li>
            <li>✔ Audit preparation support</li>
          </ul>
          <div className="mt-6 flex gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Book a Demo</Button>
          </div>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="w-full md:w-1/3 border rounded-2xl shadow-lg bg-purple-100">
        <CardHeader>
          <CardTitle>Add on Compliance & Tax Filing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Full-service tax services including GST, TDS, and Annual Income Tax.
          </p>
          <p className="mt-4 text-3xl font-bold">
            ₹2999 <span className="text-lg">per month</span>
          </p>
          <p className="text-sm text-gray-500">billed annually</p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>✔ GST filing</li>
            <li>✔ TDS/TCS management</li>
            <li>✔ Income tax filing</li>
            <li>✔ AOC/MGT filing</li>
            <li>✔ LLP annual filing</li>
            <li>✔ Director KYC</li>
          </ul>
          <div className="mt-6 flex gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Book a Demo</Button>
          </div>
        </CardContent>
      </Card>

      {/* Card 3 */}
      <Card className="w-full md:w-1/3 border rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>Add on Payroll</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Everything you need to run payroll with 100% compliance.
          </p>
          <p className="mt-4 text-3xl font-bold">
            ₹3499 <span className="text-lg">per month</span>
          </p>
          <p className="text-sm text-gray-500">billed annually</p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>✔ Offer letters & Onboarding</li>
            <li>✔ Payroll Preparation</li>
            <li>✔ Time Attendance monitoring</li>
            <li>✔ Payslip Generation</li>
            <li>✔ Labour law compliance</li>
            <li>✔ Professional tax</li>
            <li>✔ ESIC filings</li>
          </ul>
          <div className="mt-6">
            <Button className="w-full">Add on Payroll</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
