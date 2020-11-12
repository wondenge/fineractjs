

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdDisbursementDetails model module.
 * @module model/GetLoansLoanIdDisbursementDetails
 * @version 1.0
 */
class GetLoansLoanIdDisbursementDetails {
    /**
     * Constructs a new <code>GetLoansLoanIdDisbursementDetails</code>.
     * @alias module:model/GetLoansLoanIdDisbursementDetails
     */
    constructor() { 
        
        GetLoansLoanIdDisbursementDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdDisbursementDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdDisbursementDetails} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdDisbursementDetails} The populated <code>GetLoansLoanIdDisbursementDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdDisbursementDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('expectedDisbursementDate')) {
                obj['expectedDisbursementDate'] = ApiClient.convertToType(data['expectedDisbursementDate'], 'Date');
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
            if (data.hasOwnProperty('approvedPrincipal')) {
                obj['approvedPrincipal'] = ApiClient.convertToType(data['approvedPrincipal'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoansLoanIdDisbursementDetails.prototype['id'] = undefined;

/**
 * @member {Date} expectedDisbursementDate
 */
GetLoansLoanIdDisbursementDetails.prototype['expectedDisbursementDate'] = undefined;

/**
 * @member {Number} principal
 */
GetLoansLoanIdDisbursementDetails.prototype['principal'] = undefined;

/**
 * @member {Number} approvedPrincipal
 */
GetLoansLoanIdDisbursementDetails.prototype['approvedPrincipal'] = undefined;






export default GetLoansLoanIdDisbursementDetails;

