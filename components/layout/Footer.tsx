export default function Footer() {
  return (
    <footer className="bg-[#12121a] border-t border-[#2a2a3a]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4"><span className="text-[#D4A843]">DENIXE</span></h3>
            <p className="text-sm text-[#A0A0A0]">Suzhou Shangjin CNC Technology Co., Ltd.</p>
            <p className="text-sm text-[#A0A0A0] mt-2">Precision CNC Since 2010</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <p className="text-sm text-[#A0A0A0]">Suzhou Industrial Park, Jiangsu, China</p>
            <p className="text-sm text-[#D4A843] mt-2">+86-512-62969605</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Certifications</h4>
            <p className="text-sm text-[#A0A0A0]">ISO 9001 Certified</p>
            <p className="text-sm text-[#A0A0A0]">National High-Tech Enterprise</p>
            <p className="text-sm text-[#A0A0A0]">20+ Patents</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#2a2a3a] text-center">
          <p className="text-xs text-[#A0A0A0]">© 2026 DENIXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
