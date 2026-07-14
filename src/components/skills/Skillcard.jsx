const SkillCard = ({ name, Icon }) => {
  return (
    <div className="group rounded-xl border border-white/10 bg-[#1F2937] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
      <Icon
        size={40}
        className="mb-4 text-blue-400 transition group-hover:scale-110"
      />

      <h3 className="text-lg font-semibold text-white">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;