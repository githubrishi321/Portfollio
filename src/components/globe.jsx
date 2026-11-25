import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "cplusplus",
  "python",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "mongodb",
  "mysql",
  "firebase",
  "docker",
  "kubernetes",
  "git",
  "github",
  "visualstudiocode",
  "postman",
  "tailwindcss",
  "bootstrap",
  "rabbitmq",
  "swagger",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-10 pb-10 pt-4 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
