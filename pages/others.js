import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/images/profile_heera.jpg';


function Information() {
    return (
        <div className="">
            <div className="">
                <div>NPM Members</div>
            </div>
            <div className="">
                <Image
                    priority
                    src={profile}
                    className=""
                    height={200}
                    width={200}
                    alt="profile"
                />
            </div>
            <div className="">
                <h1 className="">Heera Choi</h1>
                <div className="">School of Global Entrepreneurship and ICT</div><br/>
                <section className="">
                    <div className="">Major</div>
                    <div>ICT Convergence / Visual and Performing Arts</div>
                    <div className="">Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Premiere Pro, After Effects</div>
                </section>
                <Link href="/" passHref><button className="">Home</button></Link>
            </div>
        </div>
    );
};

export default Information;