

import ApiClient from '../ApiClient';

/**
 * The PostSelfLoansDisbursementData model module.
 * @module model/PostSelfLoansDisbursementData
 * @version 1.0
 */
class PostSelfLoansDisbursementData {
    /**
     * Constructs a new <code>PostSelfLoansDisbursementData</code>.
     * @alias module:model/PostSelfLoansDisbursementData
     */
    constructor() { 
        
        PostSelfLoansDisbursementData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansDisbursementData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansDisbursementData} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansDisbursementData} The populated <code>PostSelfLoansDisbursementData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansDisbursementData();

            if (data.hasOwnProperty('expectedDisbursementDate')) {
                obj['expectedDisbursementDate'] = ApiClient.convertToType(data['expectedDisbursementDate'], 'String');
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
 * @member {String} expectedDisbursementDate
 */
PostSelfLoansDisbursementData.prototype['expectedDisbursementDate'] = undefined;

/**
 * @member {Number} principal
 */
PostSelfLoansDisbursementData.prototype['principal'] = undefined;

/**
 * @member {Number} approvedPrincipal
 */
PostSelfLoansDisbursementData.prototype['approvedPrincipal'] = undefined;






export default PostSelfLoansDisbursementData;

