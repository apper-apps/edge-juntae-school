import React from "react";
import Badge from "@/components/atoms/Badge";

const UserRoleBadge = ({ role = "free" }) => {
  const roleLabels = {
    free: "무료 사용자",
    member: "멤버",
    master: "마스터"
  };
  
  const roleVariants = {
    free: "free",
    member: "member",  
    master: "master"
  };
  
  return (
    <Badge variant={roleVariants[role]}>
      {roleLabels[role]}
    </Badge>
  );
};

export default UserRoleBadge;