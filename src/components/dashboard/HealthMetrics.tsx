
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Heart, Thermometer, Clock } from "lucide-react";

const HealthMetrics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Health Metrics</CardTitle>
        <CardDescription>
          Your recent health data and statistics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="font-medium">Heart Rate</h3>
              </div>
              <span className="text-xl font-semibold">72 BPM</span>
            </div>
            <Progress value={72} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Normal range (60-100 bpm)
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-medium">Activity</h3>
              </div>
              <span className="text-xl font-semibold">5,280</span>
            </div>
            <Progress value={53} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Steps today (Goal: 10,000)
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Thermometer className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-medium">Temperature</h3>
              </div>
              <span className="text-xl font-semibold">98.6°F</span>
            </div>
            <Progress value={50} className="h-2 bg-blue-100" />
            <p className="text-xs text-muted-foreground mt-2">
              Normal range (97°F - 99°F)
            </p>
          </div>
          
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-500 mr-2" />
                <h3 className="font-medium">Sleep</h3>
              </div>
              <span className="text-xl font-semibold">7h 20m</span>
            </div>
            <Progress value={73} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Recommendation (8 hours/night)
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthMetrics;
