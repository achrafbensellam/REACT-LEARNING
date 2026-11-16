/** ============================ start besmillah ================================*/
import { useEffect, useState } from 'react';
import './Home.css';
function HomePage() {
    const [users, setusers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response
        .json()).then(data => setusers(data))
    }, [])
    console.log(users);
    const clickCard = (user)=>{
        alert(`
            - id : ${user.id}
            - Username : ${user.username}
            - name : ${user.name}
            - phone : ${user.phone}
            - webSite : ${user.website}
            - company :
                 - company name : ${user.company.name}
                 - catchPhrase : ${user.catchPhrase}
                 - bs : ${user.bs}
            -Address : 
                 - city : ${user.address.city}
                 - street : ${user.address.street}
                 - suite : ${user.address.suite}
                 - zipcode : ${user.address.zipcode}
                 - geo :
                      - lat : ${user.address.geo.lat}
                      - lng : ${user.address.geo.lng}
            `)
    }

    return (
        <>
            <section  className='usersCard'>
                {users.map((user) => (
                    <div onClick={()=>clickCard(user)} className='card'>
                        <div>
                            <img className='userPic' src="https://static.vecteezy.com/system/resources/previews/024/983/914/large_2x/simple-user-default-icon-free-png.png" alt="" />
                            <p>{user.id}</p>
                        </div>
                        <div className='userInfoDIv'>
                            <p style={{color:"gray"}}>User name : {user.username}</p>
                            <p className='theName'>Name : <span className='theUserNAMe'>{user.name}</span></p>
                            <p>Phone number : {user.phone} </p>
                            <p>Address :</p>
                            <p style={{marginLeft:"4%"}}>- City : {user.address.city}</p>
                            <p style={{marginLeft:"4%"}}>- Street : {user.address.street}</p>
                            <div>
                                <p>Company : {user.company.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
export default HomePage;
