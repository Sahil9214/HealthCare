import React from 'react'
import styles from "./Coach.module.css";
const Coach = () => {
  return (
    <div className={styles.body}>
        <div className={styles.des}>
            <h3>Personal Coach Mode</h3>
            <p>Expand your personal training business with Personal Coach Mode. Reduce your average time spent per client by connecting with fitness savvy clients remotely to provide personal workout plans, track their workout progress, and provide feedbackExpand your personal training business with Personal Coach Mode. Reduce your average time spent per client by connecting with fitness savvy clients remotely to provide personal workout plans, track their workout progress, and provide feedback</p>
            <button className={styles.button} id="des">Start Free 14 Day Trial</button>
        </div>
        <div className={styles.des2}> 
            <div>
                <h4>Lower Your Time Spent On Each Client</h4>
                <p>Quickly and efficiently coach clients via JEFIT allowing you to expand your client base without increasing your time invested.</p>
                <h4>Easily Build and Sell Workout Plans</h4>
                <p>Develop and distribute your premium workout plan with JEFIT’s robust exercise and workout plan libraries</p>
                <h4>Build Your Brand</h4>
                <p>Build a profile that highlights your experience, client results, or certifications and attracts future clients.</p>
                <button className={styles.button} id="des2">Start Here </button>
            </div>
            <div>
                <video src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov"  ></video>
            </div>  
        </div>
        <div className={styles.des3}>
            <div className={styles.text}>
                <h3>Client<br/> Management </h3>
                <h4>Coach More Clients in Less Time</h4>
                <p>· Easily onboard new clients with JEFIT's robust online routine building and distribution system.
                    · JEFIT's premium exercise library coaches clients during their workout with exercise instructions and HD video demonstrations.
                    · Limit time spent coaching with advanced analytics, insights, and automated notifications from clients logging their workouts.
                    · JEFIT's feature-rich in-app messenger makes form reviews or workout plan updates quick and simple.
                    · Avoid conflicting with geographic based non-compete clauses by expanding your business online.</p>
                <button className={styles.button} id="des3">Start Exploring</button>
            </div>
            <div>
                <video src="https://www.jefit.com/wp/wp-content/uploads/2020/10/2remind.mov"></video>
            </div>
        </div>
        <div className={styles.des4}>
            <div>
                <video src="https://www.jefit.com/wp/wp-content/uploads/2020/10/1.mov" ></video>
            </div>
            <div className={styles.text}>
                <h3>Premium Workout Plans</h3>
                <h4>Easily personalize your workout plans
                </h4>
                <p>JEFIT's extensive exercise library makes updating or personalizing workout plans a breeze.
                    JEFIT teaches your clients how to perform each exercise with detailed instructions and an HD video mid-workout.
                    Sell your services as a coach or just sell your premium workout plan - diversify your types of clients.</p>
                    <button className={styles.button} id="des4">Start Exploring</button>
            </div>
        </div>
        <div className={styles.des5}>
            <div className={styles.text}>
                <h3>Coach Branding</h3>
                <h4>Build a reputation & let new clients come to you.</h4>
                <p>· Be one of the first Coaches on JEFIT and start building your reputation first
                    · Find time efficient clients as JEFIT users require less coaching than your average client.
                    · Display your client successes and your certifications on your profile.</p>
                    <button className={styles.button} id="des5">Start Exploring</button>
            </div>
            <div>
                <video src="https://www.jefit.com/wp/wp-content/uploads/2020/10/3profile.mov" ></video>
            </div>
        </div>
        <div className={styles.des6}>
            <div>
                <img src="https://www.jefit.com/wp/wp-content/uploads/2020/10/coachiphonex-1536x1536.png" alt=""/>
            </div>
            <div className={styles.text}>
                <h3>Start Your Free Trial</h3>
                <h4>After the free trial,</h4>
                <p>$19.99/month
                    You decide what to charge your clients and keep the rest!</p>
                    <p>For gym or studio, please contact us for bulk pricing at product@jefit.com ​</p>
                    <button className={styles.button} id="des6">Start Exploring</button>
            </div>
        </div>
        <div className={styles.last}>
            <h4>Our Goal Is To Help You <br/>Succeed</h4>
            <p>Contact us at product@jefit.com for any questions or feedback</p>
            <button className={styles.button} id="last">start 14 Day Free Trail</button>
        </div>
    </div>
  )
}

export default Coach
