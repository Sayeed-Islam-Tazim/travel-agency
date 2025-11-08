"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabItems } from "../../utils/Navitems";
import FlightForm from "./FlightForm";

const BookingForm = () => {
  return (
    <div className="relative">
      <Tabs defaultValue="Flight">
        <TabsList className="flex  items-center bg-cyan-400 gap-2">
          {tabItems.map((tab) => {
            return (
              <TabsTrigger
                className="bg-cyan-200 text-xs"
                key={tab.id}
                value={tab.name}
              >
                {tab.icon}
                {tab.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="Flight">
          <FlightForm />
        </TabsContent>
        <TabsContent value="Hotel">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingForm;
