import React from 'react';
import logo from './logo.svg';
import {ReactComponent as CaretSVG} from './icons/caret.svg';

function App() {
  return (
    <div id="manywho">
      <div class="mw-bs flow-container">
        <div class="main-container">
          <div class="main-container-inner">
            <nav class="navbar navbar-default">
              <div class=" container">
                <div class="navbar-header">
                  <button class="navbar-toggle collapsed" data-toggle="collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
              <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
              <li class="active top-nav-element"><a href="#">Home</a></li>
              <li class="top-nav-element"><a href="#">Payment Details</a></li>
              <li class="top-nav-element"><a href="#">Current Cycle Usage</a></li>
              <li class="top-nav-element"><a href="#">Billing History</a></li>
              <li class="top-nav-element"><a href="#">Deactivate</a></li>
              </ul>
              </div>
              </div>
            </nav>
            <div class="main-scroller">
              <div class="main container">
                <h2 class="page-label"></h2>
                <div class="mw-horizontal_flow capp-body admin-dash clearfix mw-container">
                  <h3>Account Details</h3>
                  <div class="row clearfix" id="horizontal">
                    <div class="mw-presentation col-sm-12">
                      <div><label></label>
                        <div>
                          <h4>Account Name: <strong>Elastic Usage Sample Inc.</strong></h4>
                          <h4>Contact Email: <strong>chriscappetta+elasticusage84@boomi.com</strong></h4>
                          <h4>Atom Account ID: <strong>boomi_andytillo-FU39SW</strong></h4>
                          <h4>Flow Tenant ID: <strong>55e9b01a-fc9e-4c66-aaa2-9360aea9eaaf</strong></h4>
                          <h4>Customer ID: <strong>cus_Hm2bSSdxGTwWiO</strong></h4>
                          <p><em>Logged in as: </em></p>
                          <p><em>Input data: </em></p>
                        </div>
                      <span class="help-block"></span>
                      <span class="help-block"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="outcome btn btn-primary" title="View Current Cycle Usage">View Current Cycle Usage</button>
                <noscript></noscript>
              </div>
            </div>

            <div class="main-scroller">
              <div class="main container">
                <h2 class="page-label"></h2>
                  <div class="mw-vertical_flow capp-body clearfix mw-container">
                    <div class="clearfix" id="vertical">
                    <div class="mw-presentation">
                      <div><label></label>
                        <div>
                          <h3>You have used <strong><em>2,167,824</em></strong> messages this billing period.</h3>
                        </div>
                        <span class="help-block"></span>
                        <span class="help-block"></span>
                      </div>
                    </div>
                  <div class="mw-presentation hidden">
                    <div><label></label>
                      <div>
                        <p>Looks like you don't have much usage for this billing period.</p>
                        <p><a href="https://boomi.to/elastic_user2" target="_blank" rel="noopener">Click here to do that!</a></p>
                      </div>
                      <span class="help-block"></span>
                      <span class="help-block"></span>
                  </div>
                </div>
                  <div class="mw-vertical_flow clearfix mw-container">
                  <h3><span class="glyphicon glyphicon-minus"></span>Message Details</h3>
                    <div class="ReactCollapse--collapse">
                      <div class="ReactCollapse--content">
                        <div class="clearfix" id="vertical">
                          <div class="table-container clear-fix mw-table">
                            <div class="clearfix ">
                              <div class="mw-items-header">
                                <div class="mw-items-header-outcomes"></div>
                              </div>
                              <div class="table-responsive">
                                <table class="table">
                                  <tbody>
                                    <tr>
                                      <th data-sort-property="item_identifier">Item</th>
                                      <th data-sort-property="stripe_subscription_id">ID</th>
                                      <th data-sort-property="subscription_type">Billing Format</th>
                                      <th data-sort-property="usage_count">Messages this period</th>
                                      <th data-sort-property="item_current_usage_cost">Cost</th>
                                      <th data-sort-property="period_start">Period Start</th>
                                      <th data-sort-property="period_end">Period End</th>
                                    </tr>
                                    <tr>
                                      <td><span>Integration/Hub/B2B Messages</span></td>
                                      <td><span>si_Hm2b8PQZlbMpT1</span></td>
                                      <td><span>Period usage</span></td>
                                      <td><span>2,047,842</span></td>
                                      <td><span>$9,349.10</span></td>
                                      <td><span>08/04/2020</span></td>
                                      <td><span>09/04/2020</span></td>
                                    </tr>
                                    <tr>
                                      <td><span>Flow Messages</span></td>
                                      <td><span>si_Hm2b6uX8Fildli</span></td>
                                      <td><span>Period usage</span></td>
                                      <td><span>116,400</span></td>
                                      <td><span>$1,765.77</span></td>
                                      <td><span>08/04/2020</span></td>
                                      <td><span>09/04/2020</span></td>
                                    </tr>
                                    <tr>
                                      <td><span>APIM Messages</span></td>
                                      <td><span>si_Hm2bmg9eGCfN8I</span></td>
                                      <td><span>Period usage</span></td>
                                      <td><span>3,582</span></td>
                                      <td><span>$187.52</span></td>
                                      <td><span>08/04/2020</span></td>
                                      <td><span>09/04/2020</span></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
