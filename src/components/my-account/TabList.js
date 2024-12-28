import React,{useState} from 'react'

function TabList() {
  const [activeTab, setActiveTab] = useState();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="container mt-1">
      <ul className="tab-menu nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'transaction-summary' ? 'active' : ''}`}
            id="transaction-summary-tab"
            data-bs-toggle="tab"
            role="tab"
            aria-controls="transaction-summary"
            aria-selected={activeTab === 'transaction-summary'}
            onClick={() => handleTabClick('transaction-summary')}
          >
            <i> <span className=""></span> </i>
            Transaction Summary
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'redemption-summary' ? 'active' : ''}`}
            id="redemption-summary-tab"
            data-bs-toggle="tab"
            role="tab"
            aria-controls="redemption-summary"
            aria-selected={activeTab === 'redemption-summary'}
            onClick={() => handleTabClick('redemption-summary')}
          >
            <i> <span className=""></span> </i>
            Redemption Summary
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'account-summary' ? 'active' : ''}`}
            id="account-summary-tab"
            data-bs-toggle="tab"
            role="tab"
            aria-controls="account-summary"
            aria-selected={activeTab === 'account-summary'}
            onClick={() => handleTabClick('account-summary')}
          >
            <i> <span className=""></span> </i>
            Account Summary
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'points-expiry' ? 'active' : ''}`}
            id="points-expiry-tab"
            data-bs-toggle="tab"
            role="tab"
            aria-controls="points-expiry"
            aria-selected={activeTab === 'points-expiry'}
            onClick={() => handleTabClick('points-expiry')}
          >
            <i> <span className=""></span> </i>
            Points Expiry
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'bonus-details' ? 'active' : ''}`}
            id="bonus-details-tab"
            data-bs-toggle="tab"
            role="tab"
            aria-controls="bonus-details"
            aria-selected={activeTab === 'bonus-details'}
            onClick={() => handleTabClick('bonus-details')}
          >
            <i> <span className=""></span> </i>
            Bonus Details
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${activeTab === 'transaction-summary' ? 'show active' : ''}`}
          id="transaction-summary"
          role="tabpanel"
          aria-labelledby="transaction-summary-tab"
        >
          <h4>Home Tab Content</h4>
          <p>This is the Home tab content.</p>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'redemption-summary' ? 'show active' : ''}`}
          id="redemption-summary"
          role="tabpanel"
          aria-labelledby="redemption-summary-tab"
        >
          <h4>Profile Tab Content</h4>
          <p>This is the Profile tab content.</p>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'account-summary' ? 'show active' : ''}`}
          id="account-summary"
          role="tabpanel"
          aria-labelledby="account-summary-tab"
        >
          <h4>Contact Tab Content</h4>
          <p>This is the Contact tab content.</p>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'points-expiry' ? 'show active' : ''}`}
          id="points-expiry"
          role="tabpanel"
          aria-labelledby="points-expiry-tab"
        >
          <h4>Contact Tab Content</h4>
          <p>This is the Contact tab content.</p>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'bonus-details' ? 'show active' : ''}`}
          id="bonus-details"
          role="tabpanel"
          aria-labelledby="bonus-details-tab"
        >
          <h4>Contact Tab Content</h4>
          <p>This is the Contact tab content.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TabList
