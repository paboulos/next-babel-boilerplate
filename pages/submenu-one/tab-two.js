import Link from 'next/link'
import SiteLayout from '../../components/SiteLayout'
import { getLayout } from '../../components/SubMenuOneLayout'

const Tab2 = () => (
  <div>
    <div>
      <p className="example">
        Setting preferences
      </p>
      <div>
        <div>
          <label className="block">
            <span className="block">
              Email
            </span>
            <div className="block">
              <input
                type="email"
                className="block"
                placeholder="johndoe@example.com"
              />
            </div>
          </label>
          <label className="block">
            <span className="block">
              Country
            </span>
            <div className="block">
              <input
                className="block"
                placeholder="US"
              />
            </div>
          </label>
          <label className="block">
            <span className="block">
              Language
            </span>
            <div className="block">
              <input
                className="block"
                placeholder="English"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
    <div className="block">
      <button
        type="button"
        className="block"
      >
        Cancel
      </button>
      <button
        type="button"
        className="block"
      >
        Save
      </button>
    </div>
  </div>
)

Tab2.getLayout = getLayout

export default Tab2
