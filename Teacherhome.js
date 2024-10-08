import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import './Home.css'
function Teacherhome() {

    const data = [
        {
          name: 'MONTH 1',
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'MONTH 2',
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'MONTH 3',
          pv: 7700,
          amt: 2290,
        },
        {
          name: 'MONTH 4',
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'MONTH 5',
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'MONTH 6',
          pv: 3800,
          amt: 2500,
        }
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TAKE ATTENDENCE</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>50</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STUDENT DETAILS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>PROFILE</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div> */}
            
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Teacherhome;