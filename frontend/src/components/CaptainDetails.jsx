import React from 'react'

const CaptainDetails = () => {
  return (
      <div>
          <div className='flex items-center justify-between'>
              <div className='flex items-center justify-start gap-3'>
                  <img className='h-10 w-10 rounded-full object-cover' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.5SvTNEacBHqDax8KkGovBQHaHa%3Fpid%3DApi&f=1&ipt=d83c11bdd10844869f992bca567494b31bbe3fe86362c50e2b57478791b44555&ipo=images' alt='' />
                  <h4 className='text-lg font-medium'>John Doe</h4>
              </div>
              <div>
                  <h4 className='text-xl font-semibold'>₹295.20</h4>
                  <p className='text-sm text-gray-600'>Earned</p>
              </div>
          </div>
          <div className='flex p-3 mt-4 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
              <div className='text-center'>
                  <i className="text-3xl mb-2 font-thin ri-history-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center'>
                  <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center'>
                  <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
          </div>
      </div>
  )
}

export default CaptainDetails