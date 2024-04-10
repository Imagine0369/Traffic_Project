import MikePic from '../assets/MikePic.jpg'
import EthanPic from '../assets/EthanPic.jpg'
import LukePic from '../assets/LukePic.jpg'
import CalebPic from '../assets/CalebPic.jpg'

const people = [
    {
      name: 'Mike Phelps',
      role: 'Directing and Backend Architecture',
      imageUrl: MikePic,
    },
    {
        name: 'Caleb Roberts',
      role: 'Data pipeline and Computer Vision',
      imageUrl: CalebPic,
    },
    {
        name: 'Ethan Ferguson',
      role: 'Front End Development and Infrastructure',
      imageUrl: EthanPic,
    },
    {
        name: 'Luke Shreiber',
      role: 'Front End Development',
      imageUrl: LukePic,
    }
    // More people...
  ]
  
  const TeamSection = () => {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-offWhite sm:text-4xl">Meet the Team</h2>
          </div>
          <ul role="list" className="grid gap-x-10 gap-y-5 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <div className="ProfileTile bg-black2 p-10 rounded-lg border-neonMagenta border-x-4">
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-black leading-7 text-offWhite ">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-offWhite">{person.role}</p>
                  </div>
                </div>
              </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  export default TeamSection;
  