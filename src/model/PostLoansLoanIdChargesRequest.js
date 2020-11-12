  

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdChargesRequest model module.
 * @module model/PostLoansLoanIdChargesRequest
 * @version 1.0
 */
class PostLoansLoanIdChargesRequest {
    /**
     * Constructs a new <code>PostLoansLoanIdChargesRequest</code>.
     *  PostLoansLoanIdChargesRequest
     * @alias module:model/PostLoansLoanIdChargesRequest
     */
    constructor() { 
        
        PostLoansLoanIdChargesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdChargesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdChargesRequest} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdChargesRequest} The populated <code>PostLoansLoanIdChargesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdChargesRequest();

            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} chargeId
 */
PostLoansLoanIdChargesRequest.prototype['chargeId'] = undefined;

/**
 * @member {String} locale
 */
PostLoansLoanIdChargesRequest.prototype['locale'] = undefined;

/**
 * @member {Number} amount
 */
PostLoansLoanIdChargesRequest.prototype['amount'] = undefined;

/**
 * @member {String} dateFormat
 */
PostLoansLoanIdChargesRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} dueDate
 */
PostLoansLoanIdChargesRequest.prototype['dueDate'] = undefined;






export default PostLoansLoanIdChargesRequest;

