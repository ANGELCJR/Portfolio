import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  // Initialize bulletsLocal with an empty array as a fallback
  const [bulletsLocal, setBulletsLocal] = React.useState([]);

  // Effect hook to update bulletsLocal when component mounts or bullets prop changes
  React.useEffect(() => {
    if (typeof bullets === 'string') {
      setBulletsLocal(bullets.split(","));
    }
  }, [bullets]); // Depend on bullets so it updates if the prop changes

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{position}</h2>
        {bulletsLocal.length > 0 && (
          <ul className="list-disc">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet.trim()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;

