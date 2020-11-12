

import ApiClient from '../ApiClient';
import GLAccountData from './GLAccountData';
import OfficeData from './OfficeData';

/**
 * The GetAccountRulesTemplateResponse model module.
 * @module model/GetAccountRulesTemplateResponse
 * @version 1.0
 */
class GetAccountRulesTemplateResponse {
    /**
     * Constructs a new <code>GetAccountRulesTemplateResponse</code>.
     * GetAccountRulesTemplateResponse
     * @alias module:model/GetAccountRulesTemplateResponse
     */
    constructor() { 
        
        GetAccountRulesTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountRulesTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountRulesTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountRulesTemplateResponse} The populated <code>GetAccountRulesTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountRulesTemplateResponse();

            if (data.hasOwnProperty('systemDefined')) {
                obj['systemDefined'] = ApiClient.convertToType(data['systemDefined'], 'Boolean');
            }
            if (data.hasOwnProperty('allowedOffices')) {
                obj['allowedOffices'] = ApiClient.convertToType(data['allowedOffices'], [OfficeData]);
            }
            if (data.hasOwnProperty('allowedAccounts')) {
                obj['allowedAccounts'] = ApiClient.convertToType(data['allowedAccounts'], [GLAccountData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} systemDefined
 */
GetAccountRulesTemplateResponse.prototype['systemDefined'] = undefined;

/**
 * @member {Array.<module:model/OfficeData>} allowedOffices
 */
GetAccountRulesTemplateResponse.prototype['allowedOffices'] = undefined;

/**
 * @member {Array.<module:model/GLAccountData>} allowedAccounts
 */
GetAccountRulesTemplateResponse.prototype['allowedAccounts'] = undefined;






export default GetAccountRulesTemplateResponse;

