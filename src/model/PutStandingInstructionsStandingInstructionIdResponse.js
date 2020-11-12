

import ApiClient from '../ApiClient';
import PutUpdateStandingInstructionChanges from './PutUpdateStandingInstructionChanges';

/**
 * The PutStandingInstructionsStandingInstructionIdResponse model module.
 * @module model/PutStandingInstructionsStandingInstructionIdResponse
 * @version 1.0
 */
class PutStandingInstructionsStandingInstructionIdResponse {
    /**
     * Constructs a new <code>PutStandingInstructionsStandingInstructionIdResponse</code>.
     * PutStandingInstructionsStandingInstructionIdResponse
     * @alias module:model/PutStandingInstructionsStandingInstructionIdResponse
     */
    constructor() { 
        
        PutStandingInstructionsStandingInstructionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutStandingInstructionsStandingInstructionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutStandingInstructionsStandingInstructionIdResponse} obj Optional instance to populate.
     * @return {module:model/PutStandingInstructionsStandingInstructionIdResponse} The populated <code>PutStandingInstructionsStandingInstructionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutStandingInstructionsStandingInstructionIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutUpdateStandingInstructionChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutStandingInstructionsStandingInstructionIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutUpdateStandingInstructionChanges} changes
 */
PutStandingInstructionsStandingInstructionIdResponse.prototype['changes'] = undefined;






export default PutStandingInstructionsStandingInstructionIdResponse;

