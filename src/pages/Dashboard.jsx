import TopCardsSection from '../components/TopCardsSection'
import ChartCards from '../components/ChartCards'
import ListCard from '../components/ListCard'

const Dashboard = () => {

  const revenueData = [
    {id: 'today', value: 'Today'},
    {id: 'week', value: 'Weekly'},
    {id: 'month', value: 'Monthly'},
    {id: 'Year', value: 'Yearly'},
  ];

  return (
    <div className='w-full lg:max-w-[1200px] mx-auto flex flex-col gap-2 my-4'>
        <TopCardsSection />
        <div className='w-full flex gap-2 flex-col lg:flex-row'>
          <ChartCards title='Total Revenue' className="w-full lg:w-2/3" dropMenu={revenueData} isRevenue={true} chart="https://helpv2.quickbase.com/hc/article_attachments/4572800326804"/>
          <ChartCards title='Invoice Status' className="w-full lg:w-1/3" dropMenu={revenueData} chart="https://img.freepik.com/premium-vector/pie-round-circle-graph-chart-simply-color-editable-3d-infographics-element_627350-1757.jpg"/>
        </div>
        <div className='w-full flex justify-between gap-2 flex-col lg:flex-row'>
          <ListCard title={"Clients"} />
          <ChartCards title='Clients Geography' className='w-full' chart={"https://cdn.pixabay.com/photo/2014/04/02/14/09/world-map-306338_960_720.png"}/>
        </div>
    </div>
  )
}

export default Dashboard