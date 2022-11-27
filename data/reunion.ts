type eventsType = {
  id: number,
  title: string,
  description: string,
  image:string,
  date?:string
}

type eventDetailType = {

}

export const events:eventsType[] = [
  {id: 1, title: 'REUNI 2021', description: 'Reuni akbar smalb@ angkatan 10', image: '/images/reunion/banner_reuni_2021.jpeg'}
]