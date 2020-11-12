

import ApiClient from '../ApiClient';

/**
 * The PutSelfBeneficiariesTPTBeneficiaryIdRequest model module.
 * @module model/PutSelfBeneficiariesTPTBeneficiaryIdRequest
 * @version 1.0
 */
class PutSelfBeneficiariesTPTBeneficiaryIdRequest {
    /**
     * Constructs a new <code>PutSelfBeneficiariesTPTBeneficiaryIdRequest</code>.
     * PutSelfBeneficiariesTPTBeneficiaryIdRequest
     * @alias module:model/PutSelfBeneficiariesTPTBeneficiaryIdRequest
     */
    constructor() { 
        
        PutSelfBeneficiariesTPTBeneficiaryIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfBeneficiariesTPTBeneficiaryIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfBeneficiariesTPTBeneficiaryIdRequest} obj Optional instance to populate.
     * @return {module:model/PutSelfBeneficiariesTPTBeneficiaryIdRequest} The populated <code>PutSelfBeneficiariesTPTBeneficiaryIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfBeneficiariesTPTBeneficiaryIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('transferLimit')) {
                obj['transferLimit'] = ApiClient.convertToType(data['transferLimit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutSelfBeneficiariesTPTBeneficiaryIdRequest.prototype['name'] = undefined;

/**
 * @member {Number} transferLimit
 */
PutSelfBeneficiariesTPTBeneficiaryIdRequest.prototype['transferLimit'] = undefined;






export default PutSelfBeneficiariesTPTBeneficiaryIdRequest;

