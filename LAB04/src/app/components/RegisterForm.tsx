export default function RegisterForm() {
    return (
    <form>
        <div>
            <input type="text" placeholder="Name" style={{border:"1px solid white"}} />
        </div>

        <div>
            <input type="email" placeholder="Email" style={{border:"1px solid white"}} />
        </div>

        <div>
            <input type="password" placeholder="Password" style={{border:"1px solid white"}} />
        </div>

        <button type="submit" style={{ border: "1px solid white", padding: "5px" }}>Register</button>
    </form>
    )
}