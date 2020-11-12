

import ApiClient from '../ApiClient';
import GetCollateralsTemplateAllowedTypes from './GetCollateralsTemplateAllowedTypes';

/**
 * The GetLoansLoanIdCollateralsTemplateResponse model module.
 * @module model/GetLoansLoanIdCollateralsTemplateResponse
 * @version 1.0
 */
class GetLoansLoanIdCollateralsTemplateResponse {
    /**
     * Constructs a new <code>GetLoansLoanIdCollateralsTemplateResponse</code>.
     * GetLoansLoanIdCollateralsTemplateResponse
     * @alias module:model/GetLoansLoanIdCollateralsTemplateResponse
     */
    constructor() { 
        
        GetLoansLoanIdCollateralsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdCollateralsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdCollateralsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdCollateralsTemplateResponse} The populated <code>GetLoansLoanIdCollateralsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdCollateralsTemplateResponse();

            if (data.hasOwnProperty('allowedCollateralTypes')) {
                obj['allowedCollateralTypes'] = ApiClient.convertToType(data['allowedCollateralTypes'], [GetCollateralsTemplateAllowedTypes]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetCollateralsTemplateAllowedTypes>} allowedCollateralTypes
 */
GetLoansLoanIdCollateralsTemplateResponse.prototype['allowedCollateralTypes'] = undefined;






export default GetLoansLoanIdCollateralsTemplateResponse;

