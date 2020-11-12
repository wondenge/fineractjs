

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdCollateralsRequest model module.
 * @module model/PostLoansLoanIdCollateralsRequest
 * @version 1.0
 */
class PostLoansLoanIdCollateralsRequest {
    /**
     * Constructs a new <code>PostLoansLoanIdCollateralsRequest</code>.
     * PostLoansLoanIdCollateralsRequest
     * @alias module:model/PostLoansLoanIdCollateralsRequest
     */
    constructor() { 
        
        PostLoansLoanIdCollateralsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdCollateralsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdCollateralsRequest} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdCollateralsRequest} The populated <code>PostLoansLoanIdCollateralsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdCollateralsRequest();

            if (data.hasOwnProperty('collateralTypeId')) {
                obj['collateralTypeId'] = ApiClient.convertToType(data['collateralTypeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} collateralTypeId
 */
PostLoansLoanIdCollateralsRequest.prototype['collateralTypeId'] = undefined;






export default PostLoansLoanIdCollateralsRequest;

