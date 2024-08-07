import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import UpgradeModal from "../components/UpgradeModal";
import { topics } from "../data/TopicsData";

const Setup = () => {
  const [showModal, setShowModal] = useState(false);
  const [genre, setGenre] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const canCreateWebsite = async () => {
      try {
        await axios.get("/api/v1/user/can-create-website");
        // navigate("setup");
      } catch (error) {
        toast.error(error.response?.data?.message);
        setShowModal(true);
      }
    };
    canCreateWebsite();
  }, []);
  return (
    <div className="min-h-screen bg-primary-900 bg-[url('./assets/hero-bg.svg')] pt-16 md:pt-24">
      {showModal && <UpgradeModal setShowModal={setShowModal} />}
      <div className="section-container text-white">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Click Click and Go !!!
        </h2>
        <div className="mt-6">
          <p className="my-2 text-slate-300">Choose a topic to start</p>
          <select
            name="topics"
            id="topics"
            className="block rounded-lg border-2 border-gray-300 bg-primary-800 py-2 pl-3 pr-10 text-white focus:border-secondary-600 focus:outline-none sm:text-sm"
            onChange={(e) => setGenre(e.target.value)}
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.name} className="px-4 py-2">
                {topic.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Setup;
