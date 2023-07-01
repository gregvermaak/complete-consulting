import { FC } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Complete Consulting | About",
}

const page: FC = () => {
  return (
    <div className="container min-h-[calc(100vh-210px)] mx-auto mt-12 max-w-7xl">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold">About Us</h1>
        <div className="flex flex-col gap-6 max-w-2xl">
          <p>
            Complete Consulting Ltd is a specialised custom cabinetry design and
            installation company.{" "}
          </p>
          <p>
            {" "}
            Jay&apos;s (owner) Architectural background and passion for design
            is apparent when style and functionality coupled with clever use of
            materials comes together, providing his clients with unique results
            time and time again.{" "}
          </p>{" "}
          <p>
            In-depth product knowledge and understanding of project processes
            and costs means Jay is able to guide you through both the design and
            installation of your new space with confidence.
          </p>
          <p>
            Working closely with some of the best craftsman and installers
            within the industry, Complete Consulting Ltd offers a manufacture
            and installation service overseen by Jay, who will ensure only the
            highest of quality and detail is achieved, no matter how big or
            small the scale of your project may be.
          </p>
          <p>
            Whether you are a Home owner, Architect, Interior Designer, Builder
            or Developer seeking optimum professionalism and creativity,
            Complete Consulting Ltd want to be that integral part of your new
            build or renovation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
