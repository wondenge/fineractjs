

import ApiClient from '../ApiClient';

/**
 * The DeleteSelfBeneficiariesTPTBeneficiaryIdResponse model module.
 * @module model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse
 * @version 1.0
 */
class DeleteSelfBeneficiariesTPTBeneficiaryIdResponse {
    /**
     * Constructs a new <code>DeleteSelfBeneficiariesTPTBeneficiaryIdResponse</code>.
     * DeleteSelfBeneficiariesTPTBeneficiaryIdResponse
     * @alias module:model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse
     */
    constructor() { 
        
        DeleteSelfBeneficiariesTPTBeneficiaryIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteSelfBeneficiariesTPTBeneficiaryIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse} The populated <code>DeleteSelfBeneficiariesTPTBeneficiaryIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteSelfBeneficiariesTPTBeneficiaryIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteSelfBeneficiariesTPTBeneficiaryIdResponse.prototype['resourceId'] = undefined;






export default DeleteSelfBeneficiariesTPTBeneficiaryIdResponse;

