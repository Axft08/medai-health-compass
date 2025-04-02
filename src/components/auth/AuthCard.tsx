
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  className?: string;
  cardTitle: string;
  cardDescription?: string;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({
  className,
  cardTitle,
  cardDescription,
  footerContent,
  children
}) => {
  return (
    <Card className={cn("w-full max-w-md shadow-lg", className)}>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">{cardTitle}</CardTitle>
        {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {footerContent && (
        <CardFooter className="flex justify-center border-t px-6 py-4">
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthCard;
