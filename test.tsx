<div className="overflow-hidden w-full">
  <div
    className="flex gap-6 clients-track"
    style={{
      // تأكد أن الحركة تنتهي عند -50% تماماً
      animation: "scrollLeft 35s linear infinite",
      width: "max-content",
    }}
  >
    {/* تكرار المصفوفة مرتين باستخدام Spread Operator */}
    {[...allClients, ...allClients].map((client, i) => (
      // تم تغيير الـ key ليتضمن الـ index (i) لضمان عدم تكرار الـ keys
      <div key={`${client.name}-${i}`} className="flex-shrink-0 group">
        <div className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 cursor-default select-none">
          {/* Logo circle */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
            style={{ background: client.color }}
          >
            {client.initials}
          </div>
          <span className="text-[#5B3A29] font-semibold text-sm whitespace-nowrap">
            {client.name}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
