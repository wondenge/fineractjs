

import ApiClient from '../ApiClient';
import PutSelfBeneficiariesChanges from './PutSelfBeneficiariesChanges';

/**
 * The PutSelfBeneficiariesTPTBeneficiaryIdResponse model module.
 * @module model/PutSelfBeneficiariesTPTBeneficiaryIdResponse
 * @version 1.0
 */
class PutSelfBeneficiariesTPTBeneficiaryIdResponse {
    /**
     * Constructs a new <code>PutSelfBeneficiariesTPTBeneficiaryIdResponse</code>.
     * PutSelfBeneficiariesTPTBeneficiaryIdResponse
     * @alias module:model/PutSelfBeneficiariesTPTBeneficiaryIdResponse
     */
    constructor() { 
        
        PutSelfBeneficiariesTPTBeneficiaryIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfBeneficiariesTPTBeneficiaryIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfBeneficiariesTPTBeneficiaryIdResponse} obj Optional instance to populate.
     * @return {module:model/PutSelfBeneficiariesTPTBeneficiaryIdResponse} The populated <code>PutSelfBeneficiariesTPTBeneficiaryIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfBeneficiariesTPTBeneficiaryIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutSelfBeneficiariesChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutSelfBeneficiariesTPTBeneficiaryIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutSelfBeneficiariesChanges} changes
 */
PutSelfBeneficiariesTPTBeneficiaryIdResponse.prototype['changes'] = undefined;






export default PutSelfBeneficiariesTPTBeneficiaryIdResponse;

