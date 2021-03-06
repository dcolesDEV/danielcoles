import useSWR from 'swr'
import fetcher from '@/utils/fetcher'

type currentlyPlayingData = {
  isPlaying: boolean
  albumImageUrl: string
  title: string
  artist: string
  trackUrl: string
}

const CurrentlyPlaying: React.FC = () => {
  const { data } = useSWR<currentlyPlayingData>('/api/getCurrentlyPlaying', fetcher)

  return (
    <div className="[ Spotify ][ CurrentlyPlaying ] md:p-4">
      <div className="[ Spotify ][ CurrentlyPlaying__Container ] md:mx-auto border-dc-grey dark:border-white border-2">
        {data?.isPlaying ? (
          <div className="[ Spotify ][ CurrentlyPlaying__IsPlaying ] grid grid-flow-row md:grid-cols-5 grid-cols-3 grid-rows-1 space-x-2">
            <div className="[ Spotify ][ CurrentlyPlaying__TrackAlbumImage ]">
              <img
                className="[ Spotify ][ CurrentlyPlaying__Text ] max-h-full max-w-full h-auto w-auto"
                src={data.albumImageUrl}
                alt={`${data.title}-img`}
              />
            </div>
            <div className="[ Spotify ][ CurrentlyPlaying__TrackInfo ] md:col-span-4 col-span-2">
              <div className="[ Spotify ][ CurrentlyPlaying__Text ] italic opacity-75 whitespace-nowrap overflow-hidden pt-2">
                Currently Playing...
              </div>
              <div className="[ Spotify ][ CurrentlyPlaying__TrackTitle ][ CurrentlyPlaying__Text ] font-extrabold text-lg md:text-3xl whitespace-nowrap overflow-hidden">
                {data.title}
              </div>
              <div className="[ Spotify ][ CurrentlyPlaying__TrackArtist ][ CurrentlyPlaying__Text ] font-bold text-base md:text-xl whitespace-nowrap overflow-hidden">
                {data.artist}
              </div>
              <div className="[ Spotify ][ CurrentlyPlaying__TrackLink ] opacity-75">
                <a
                  href={data.trackUrl}
                  target="_blank"
                  title="Click to view song on Spotify"
                  rel="noreferrer"
                  className="[ CurrentlyPlaying__Text ] underline"
                >
                  View song on Spotify
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="[ Spotify ][ NotPlaying ]">
            <div className="[ Spotify ][ NotPlaying ][ CurrentlyPlaying__Text ] p-5 self-center text-center font-bold">
              Looks like i&apos;m not playing anything at the moment!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CurrentlyPlaying
