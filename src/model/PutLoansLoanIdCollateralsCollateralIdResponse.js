

import ApiClient from '../ApiClient';
import PutLoansLoandIdCollateralsCollateralIdRequest from './PutLoansLoandIdCollateralsCollateralIdRequest';

/**
 * The PutLoansLoanIdCollateralsCollateralIdResponse model module.
 * @module model/PutLoansLoanIdCollateralsCollateralIdResponse
 * @version 1.0
 */
class PutLoansLoanIdCollateralsCollateralIdResponse {
    /**
     * Constructs a new <code>PutLoansLoanIdCollateralsCollateralIdResponse</code>.
     * PutLoansLoanIdCollateralsCollateralIdResponse
     * @alias module:model/PutLoansLoanIdCollateralsCollateralIdResponse
     */
    constructor() { 
        
        PutLoansLoanIdCollateralsCollateralIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoansLoanIdCollateralsCollateralIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoansLoanIdCollateralsCollateralIdResponse} obj Optional instance to populate.
     * @return {module:model/PutLoansLoanIdCollateralsCollateralIdResponse} The populated <code>PutLoansLoanIdCollateralsCollateralIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoansLoanIdCollateralsCollateralIdResponse();

            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutLoansLoandIdCollateralsCollateralIdRequest.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} loanId
 */
PutLoansLoanIdCollateralsCollateralIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutLoansLoanIdCollateralsCollateralIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutLoansLoandIdCollateralsCollateralIdRequest} changes
 */
PutLoansLoanIdCollateralsCollateralIdResponse.prototype['changes'] = undefined;






export default PutLoansLoanIdCollateralsCollateralIdResponse;

