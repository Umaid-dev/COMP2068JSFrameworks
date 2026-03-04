export default function LoginForm() {
    return (
        <form> 
            <div>
                <input type="email" placeholder="Email" style={{border:"1px solid white"}} />
            </div>

            <div>
                <input type="password" placeholder="Password" style={{border:"1px solid white"}} />
            </div>

            <button type="submit" style={{ border: "1px solid white", padding: "5px" }}>Login</button>
        </form>
    )
}