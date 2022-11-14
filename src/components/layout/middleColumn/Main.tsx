import { Cog6Tooth, HashTag } from "../../common/icons";

export default function Main() {
  return (
    <main className="flex-auto">
      <div className="collapse collapse-arrow channel_collapse_attr">
        <input type="checkbox" className="peer" />
        <div className="channel-title">
          <span>TEXT CHANNELS</span>
          <span className="channel-settings">
            <Cog6Tooth />
          </span>
        </div>
        <div className="channel-items">
          <div className="channel-item">
            <span className="mr-2 fill-white">
              <HashTag />
            </span>
            <p>Channel1</p>
          </div>

          <div className="channel-item">
            <span className="mr-2 fill-white">
              <HashTag />
            </span>
            <p>Channel2</p>
          </div>
        </div>
      </div>
    </main>
  );
}
