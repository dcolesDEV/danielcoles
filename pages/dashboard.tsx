import Wrapper from '@/components/wrapper/wrapper'
import Dashboard from '@/components/dashboard/dashboard'

export default function dashboard() {
  return (
    <div>
      <Wrapper>
        <div className="py-36">
          <Dashboard />
        </div>
      </Wrapper>
    </div>
  )
}