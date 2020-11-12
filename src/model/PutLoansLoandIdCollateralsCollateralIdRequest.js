

import ApiClient from '../ApiClient';

/**
 * The PutLoansLoandIdCollateralsCollateralIdRequest model module.
 * @module model/PutLoansLoandIdCollateralsCollateralIdRequest
 * @version 1.0
 */
class PutLoansLoandIdCollateralsCollateralIdRequest {
    /**
     * Constructs a new <code>PutLoansLoandIdCollateralsCollateralIdRequest</code>.
     * PutLoansLoandIdCollateralsCollateralIdRequest
     * @alias module:model/PutLoansLoandIdCollateralsCollateralIdRequest
     */
    constructor() { 
        
        PutLoansLoandIdCollateralsCollateralIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoansLoandIdCollateralsCollateralIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoansLoandIdCollateralsCollateralIdRequest} obj Optional instance to populate.
     * @return {module:model/PutLoansLoandIdCollateralsCollateralIdRequest} The populated <code>PutLoansLoandIdCollateralsCollateralIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoansLoandIdCollateralsCollateralIdRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutLoansLoandIdCollateralsCollateralIdRequest.prototype['description'] = undefined;






export default PutLoansLoandIdCollateralsCollateralIdRequest;

