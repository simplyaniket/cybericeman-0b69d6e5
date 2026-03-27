import { useState } from "react";
import { QrCode, Smartphone } from "lucide-react";

type ScanState = "idle" | "scanning" | "result";

const QRPattern = () => (
  <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    {/* Top-left finder */}
    <rect x="10" y="10" width="60" height="60" rx="4" fill="#0f1a0f"/>
    <rect x="18" y="18" width="44" height="44" rx="2" fill="white"/>
    <rect x="26" y="26" width="28" height="28" rx="1" fill="#0f1a0f"/>
    {/* Top-right finder */}
    <rect x="110" y="10" width="60" height="60" rx="4" fill="#0f1a0f"/>
    <rect x="118" y="18" width="44" height="44" rx="2" fill="white"/>
    <rect x="126" y="26" width="28" height="28" rx="1" fill="#0f1a0f"/>
    {/* Bottom-left finder */}
    <rect x="10" y="110" width="60" height="60" rx="4" fill="#0f1a0f"/>
    <rect x="18" y="118" width="44" height="44" rx="2" fill="white"/>
    <rect x="26" y="126" width="28" height="28" rx="1" fill="#0f1a0f"/>
    {/* Data modules */}
    {([
      [82,10],[90,10],[98,10],[82,18],[98,18],[82,26],[90,26],
      [82,42],[90,42],[98,42],[82,50],[90,50],[82,58],[98,58],
      [10,82],[18,82],[26,82],[42,82],[50,82],[58,82],
      [10,90],[26,90],[42,90],[58,90],
      [10,98],[18,98],[42,98],[50,98],[58,98],
      [82,82],[90,82],[106,82],[114,82],[130,82],[138,82],[146,82],[154,82],[162,82],
      [82,90],[106,90],[122,90],[138,90],[154,90],
      [82,98],[90,98],[98,98],[106,98],[130,98],[146,98],[162,98],
      [82,106],[90,106],[114,106],[122,106],[138,106],[154,106],
      [82,114],[98,114],[106,114],[130,114],[138,114],[162,114],
      [82,122],[90,122],[106,122],[122,122],[146,122],[154,122],
      [82,130],[98,130],[114,130],[130,130],[138,130],[162,130],
      [82,138],[106,138],[122,138],[146,138],
      [82,146],[90,146],[98,146],[106,146],[130,146],[138,146],[162,146],
      [82,154],[114,154],[122,154],[138,154],[154,154],[162,154],
      [82,162],[90,162],[106,162],[130,162],[146,162],[162,162],
    ] as [number, number][]).map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="7" height="7" rx="1" fill="#0f1a0f"/>
    ))}
  </svg>
);

const PriceTagResult = () => (
  <div className="price-slide bg-white rounded-2xl cartoon-border p-6 max-w-xs mx-auto">
    <div className="text-center mb-4">
      <div className="text-4xl mb-2">🥛</div>
      <div className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>Organic Yogurt 500g</div>
      <div className="text-green-600 text-xs font-semibold mt-1">SmartExpiry Verified Price</div>
    </div>
    <div className="flex items-center justify-center gap-3 mb-3">
      <span className="text-gray-400 line-through text-lg">₹120</span>
      <span className="text-3xl font-bold text-green-600" style={{ fontFamily: "'Fredoka One', cursive" }}>₹84</span>
      <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">30% OFF</span>
    </div>
    <div className="space-y-2 mb-4">
      <div className="bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-sm text-orange-700 flex items-center gap-2">
        ⏰ <span className="font-semibold">2 days remaining</span>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm text-green-700 flex items-center gap-2">
        ✅ <span className="font-semibold">Still Fresh & Safe</span>
      </div>
    </div>
    <button className="w-full bg-green-500 text-white py-3 rounded-xl font-bold cartoon-border hover:bg-green-400 transition-colors">
      🛒 Add to Cart
    </button>
  </div>
);

const ScanAnimation = () => (
  <div className="relative w-48 h-48 mx-auto rounded-xl overflow-hidden border-2 border-green-500">
    <QRPattern />
    <div
      className="absolute left-0 right-0 h-0.5 bg-green-400 opacity-80"
      style={{ animation: "scanLine 1.5s linear infinite", position: "absolute", top: "0%" }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-green-400 font-bold text-sm bg-black/60 px-3 py-1 rounded-full">Scanning...</div>
    </div>
  </div>
);

const QRScanSection = () => {
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [cameraError, setCameraError] = useState(false);

  const handleDemoScan = () => {
    setScanState("scanning");
    setTimeout(() => setScanState("result"), 1500);
  };

  const handleCameraDemoScan = () => {
    // Camera-based QR scanning requires a dedicated QR library.
    // Show demo mode with a clear label so users aren't misled by a
    // permission request that doesn't actually scan anything.
    setCameraError(true);
    setScanState("scanning");
    setTimeout(() => setScanState("result"), 1500);
  };

  const handleReset = () => {
    setScanState("idle");
    setCameraError(false);
  };

  return (
    <section id="qr-demo" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Live Demo</span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mt-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
            Try the <span className="text-green-500">SmartExpiry</span> Scan
          </h2>
          <p className="text-gray-600 mt-3 max-w-lg mx-auto">
            Scan a SmartExpiry QR label and instantly see the dynamic price, expiry countdown, and freshness badge.
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 cartoon-border max-w-md mx-auto">
          {scanState === "idle" && (
            <div className="text-center">
              <div className="mb-6">
                <QRPattern />
                <p className="text-gray-500 text-sm mt-3">Sample SmartExpiry QR Label</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleDemoScan}
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold cartoon-border hover:bg-green-400 transition-all flex items-center gap-2 justify-center"
                >
                  <QrCode size={18} /> Try Demo Scan
                </button>
                <button
                  onClick={handleCameraDemoScan}
                  className="border-2 border-green-500 text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all flex items-center gap-2 justify-center"
                >
                  <Smartphone size={18} /> Demo: Camera Mode
                </button>
              </div>
              {cameraError && (
                <p className="text-orange-500 text-xs mt-2">📱 Full camera scanning available in the native app — showing demo result</p>
              )}
            </div>
          )}

          {scanState === "scanning" && <ScanAnimation />}

          {scanState === "result" && (
            <div>
              <PriceTagResult />
              <button onClick={handleReset} className="mt-4 w-full text-center text-gray-400 text-sm hover:text-gray-600 transition-colors">
                ↩ Scan another product
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QRScanSection;
