

import ApiClient from '../ApiClient';

/**
 * The DeleteLoansLoanIdCollateralsCollateralIdResponse model module.
 * @module model/DeleteLoansLoanIdCollateralsCollateralIdResponse
 * @version 1.0
 */
class DeleteLoansLoanIdCollateralsCollateralIdResponse {
    /**
     * Constructs a new <code>DeleteLoansLoanIdCollateralsCollateralIdResponse</code>.
     * DeleteLoansLoanIdCollateralsCollateralIdResponse
     * @alias module:model/DeleteLoansLoanIdCollateralsCollateralIdResponse
     */
    constructor() { 
        
        DeleteLoansLoanIdCollateralsCollateralIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteLoansLoanIdCollateralsCollateralIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLoansLoanIdCollateralsCollateralIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteLoansLoanIdCollateralsCollateralIdResponse} The populated <code>DeleteLoansLoanIdCollateralsCollateralIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteLoansLoanIdCollateralsCollateralIdResponse();

            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} loanId
 */
DeleteLoansLoanIdCollateralsCollateralIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteLoansLoanIdCollateralsCollateralIdResponse.prototype['resourceId'] = undefined;






export default DeleteLoansLoanIdCollateralsCollateralIdResponse;

