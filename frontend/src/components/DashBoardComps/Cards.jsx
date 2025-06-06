/* eslint-disable react/prop-types */
import { Activity, Link, MousePointerClick } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleLoader } from "react-spinners";

const Cards = ({ urls }) => {
  const [totalClicks, setTotalClicks] = useState(0);
  const [activeLinks, setActiveLinks] = useState(null);

  useEffect(() => {
    if (urls) {
      let total = urls.reduce((count, url) => count + url.clicks.length, 0);
      setTotalClicks(total);
      const active = urls.filter((url) => url.isActive === true);
      setActiveLinks(active);
    }
  }, [urls]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 px-10">
      <Card>
        <CardHeader className="flex justify-between">
          <CardTitle className="text-sm font-medium">Total Links</CardTitle>
          <div className="text-2xl font-bold">
            <Link />
          </div>
        </CardHeader>
        <CardContent>
          {urls ? (
            <div className="text-2xl font-bold">{urls.length}</div>
          ) : (
            <CircleLoader size={30} />
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
          <div className="text-2xl font-bold">
            <MousePointerClick />
          </div>
        </CardHeader>
        <CardContent>
          {urls ? (
            <div className="text-2xl font-bold">{totalClicks}</div>
          ) : (
            <CircleLoader size={30} />
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Active Links</CardTitle>
          <div className="text-2xl font-bold">
            <Activity />
          </div>
        </CardHeader>
        <CardContent>
          {urls ? (
            <div className="text-2xl font-bold">
              {activeLinks && activeLinks.length}
            </div>
          ) : (
            <CircleLoader size={30} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
