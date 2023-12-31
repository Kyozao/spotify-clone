import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import getSongs from "../../actions/getSongs";
import PageContent from "@/components/PageContent";
import { Song } from "../../types";
import useLoadImage from "../../hooks/useLoadImage";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-bold">Welcome Back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/Likedsongs.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Newest Songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
