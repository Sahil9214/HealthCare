import React from 'react'
// import { Center, Image, Button, Stack, Text, Input } from '@chakra-ui/react';

const Workout = () => {
    return (
        <div>
            <div>
                <img className="h-100 w-2000" src='https://tse4.mm.bing.net/th/id/OIP.7_t1CzPrndtDSZrh5MYT9wHaEu?w=299&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='workoutErr' />
            </div>
            <br />
            <div>
                <h2 className="text-slate-500 hover:text-blue-600 text-2xl">WORKOUT CATEGORIES</h2>
                <p className="text-lg">Choose a category that best suits the workout you're searching for. Once in the category, use the sort
                    <br />and filter options to find the right workout for your experience and goals.</p>
            </div>
            <br/>
            <div className="grid grid-cols-3 gap-3 content-center" style={{border:'1px solid red'}}>
                <div>
                    <img src='https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP' alt='menErr'/>
                    <a href='#'>Workouts for Mens</a>
                </div>
                <div>
                    <img src='https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsforwomen.jpg?itok=G4rsV_4R' alt='WomenErr'/>
                    <a href='#'>Workouts for Womens</a>
                </div>
                <div>
                    <img src='https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/musclebuilding.jpg?itok=7ajNGjpw' alt='MuscleErr'/>
                    <a href='#'>Muscle Building</a>
                </div>
                <div>
                    <img src='https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/fatloss.jpg?itok=FegmOZtr' alt='lossErr'/>
                    <a href='#'>Weight Loss</a>
                </div>
                <div>
                    <img src='https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/increasestrength.jpg?itok=kVvW71is' alt='Err'/>
                    <a href='#'>Increase Strength</a>
                </div>
                <div>
                    <img src='https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/abworkouts.jpg?itok=ZRYxAHFd' alt='absErr'/>
                    <a href='#'>Ab Workouts</a>
                </div>
            </div>
        </div>
    )
}

export default Workout;
