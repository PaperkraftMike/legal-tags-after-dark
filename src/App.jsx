import { Routes, Route } from 'react-router-dom'
import NightOwlFlashSale from './pages/NightOwlFlashSale'
import NightOwlPaymentPlan from './pages/NightOwlPaymentPlan'
import Checkout from './pages/Checkout'
import RegistrationCarNewer from './pages/checkout/RegistrationCarNewer'
import RegistrationCarOlder from './pages/checkout/RegistrationCarOlder'
import RegistrationTruckNewer from './pages/checkout/RegistrationTruckNewer'
import RegistrationTruckOlder from './pages/checkout/RegistrationTruckOlder'
import RegistrationHeavyTruck from './pages/checkout/RegistrationHeavyTruck'
import RegistrationMotorcycle from './pages/checkout/RegistrationMotorcycle'
import RegistrationTrailer from './pages/checkout/RegistrationTrailer'
import RegistrationRv from './pages/checkout/RegistrationRv'
import RegistrationBoat from './pages/checkout/RegistrationBoat'
import RegistrationOffRoad from './pages/checkout/RegistrationOffRoad'
import RegistrationSemi from './pages/checkout/RegistrationSemi'
import RegistrationMilitary from './pages/checkout/RegistrationMilitary'
import RegistrationImport from './pages/checkout/RegistrationImport'
import RetitleCarNewer from './pages/checkout/RetitleCarNewer'
import RetitleCarMid from './pages/checkout/RetitleCarMid'
import RetitleCarClassic from './pages/checkout/RetitleCarClassic'
import RetitleTruckNewer from './pages/checkout/RetitleTruckNewer'
import RetitleTruckMid from './pages/checkout/RetitleTruckMid'
import RetitleTruckClassic from './pages/checkout/RetitleTruckClassic'
import RetitleHeavyTruck from './pages/checkout/RetitleHeavyTruck'
import RetitleMotorcycle from './pages/checkout/RetitleMotorcycle'
import RetitleMotorcycleClassic from './pages/checkout/RetitleMotorcycleClassic'
import RetitleTrailer from './pages/checkout/RetitleTrailer'
import RetitleRv from './pages/checkout/RetitleRv'
import RetitleBoat from './pages/checkout/RetitleBoat'
import RetitleOffRoad from './pages/checkout/RetitleOffRoad'
import RetitleSemi from './pages/checkout/RetitleSemi'
import RetitleMilitary from './pages/checkout/RetitleMilitary'
import RetitleImport from './pages/checkout/RetitleImport'
import RegistrationSouthDakota from './pages/checkout/RegistrationSouthDakota'
import RegistrationLowSpeed from './pages/checkout/RegistrationLowSpeed'
import TempTag from './pages/checkout/TempTag'
import DealerProgram from './pages/checkout/DealerProgram'
import CollectorProgram from './pages/checkout/CollectorProgram'

export default function App() {
  return (
    <Routes>
      {/* Offer 1: Night Owl Flash Sale ($500 off) */}
      <Route path="/offer1" element={<NightOwlFlashSale />} />
      
      {/* Offer 2: Night Owl Payment Plan ($199 tonight) */}
      <Route path="/offer2" element={<NightOwlPaymentPlan />} />
      
      {/* Default route goes to offer1 */}
      <Route path="/" element={<NightOwlFlashSale />} />
      
      {/* All checkout routes — shared across both offers */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/registration-car-newer" element={<RegistrationCarNewer />} />
      <Route path="/registration-car-older" element={<RegistrationCarOlder />} />
      <Route path="/registration-truck-newer" element={<RegistrationTruckNewer />} />
      <Route path="/registration-truck-older" element={<RegistrationTruckOlder />} />
      <Route path="/registration-heavy-truck" element={<RegistrationHeavyTruck />} />
      <Route path="/registration-motorcycle" element={<RegistrationMotorcycle />} />
      <Route path="/registration-trailer" element={<RegistrationTrailer />} />
      <Route path="/registration-rv" element={<RegistrationRv />} />
      <Route path="/registration-boat" element={<RegistrationBoat />} />
      <Route path="/registration-off-road" element={<RegistrationOffRoad />} />
      <Route path="/registration-semi" element={<RegistrationSemi />} />
      <Route path="/registration-military" element={<RegistrationMilitary />} />
      <Route path="/registration-import" element={<RegistrationImport />} />
      <Route path="/retitle-car-newer" element={<RetitleCarNewer />} />
      <Route path="/retitle-car-mid" element={<RetitleCarMid />} />
      <Route path="/retitle-car-classic" element={<RetitleCarClassic />} />
      <Route path="/retitle-truck-newer" element={<RetitleTruckNewer />} />
      <Route path="/retitle-truck-mid" element={<RetitleTruckMid />} />
      <Route path="/retitle-truck-classic" element={<RetitleTruckClassic />} />
      <Route path="/retitle-heavy-truck" element={<RetitleHeavyTruck />} />
      <Route path="/retitle-motorcycle" element={<RetitleMotorcycle />} />
      <Route path="/retitle-motorcycle-classic" element={<RetitleMotorcycleClassic />} />
      <Route path="/retitle-trailer" element={<RetitleTrailer />} />
      <Route path="/retitle-rv" element={<RetitleRv />} />
      <Route path="/retitle-boat" element={<RetitleBoat />} />
      <Route path="/retitle-off-road" element={<RetitleOffRoad />} />
      <Route path="/retitle-semi" element={<RetitleSemi />} />
      <Route path="/retitle-military" element={<RetitleMilitary />} />
      <Route path="/retitle-import" element={<RetitleImport />} />
      <Route path="/registration-south-dakota" element={<RegistrationSouthDakota />} />
      <Route path="/registration-ebike" element={<RegistrationLowSpeed />} />
      <Route path="/temp-tag" element={<TempTag />} />
      <Route path="/dealer" element={<DealerProgram />} />
      <Route path="/collector" element={<CollectorProgram />} />
    </Routes>
  )
}
