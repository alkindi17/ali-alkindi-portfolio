export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex flex-row gap-6 max-md:gap-4">
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            value={tab}
            className={
              "mt-5 rounded-xl border text-sm max-md:text-xs w-32 max-md:w-24 h-10 max-md:h-9 " +
              (activeTab === tab ? "active-skill" : "non-active-skill")
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
