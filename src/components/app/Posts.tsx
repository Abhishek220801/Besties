import Card from "../shared/Card"

const Posts = () => {
  return (
    <div className="space-y-4">
      {
        Array(20).fill(0).map((_, index) => (
          <Card
            key={index}
            title={
              <div className="flex justify-between">
                <label className="text-base font-normal">
                  <span>Jan 2, 2026</span>
                </label>
              </div>
            }
            divider
          >
            <div className="relative">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe soluta, aperiam ullam pariatur vel, dolor sequi sapiente neque doloribus, corrupti deserunt. Maiores accusamus est sint earum perferendis! Deserunt, natus.
              </p>
              <span className="text-xs text-zinc-600 absolute -bottom-3 right-0">7:09 PM</span>
            </div>

          </Card>
        ))
      }
    </div>
  )
}

export default Posts
