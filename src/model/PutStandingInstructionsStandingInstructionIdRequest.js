

import ApiClient from '../ApiClient';

/**
 * The PutStandingInstructionsStandingInstructionIdRequest model module.
 * @module model/PutStandingInstructionsStandingInstructionIdRequest
 * @version 1.0
 */
class PutStandingInstructionsStandingInstructionIdRequest {
    /**
     * Constructs a new <code>PutStandingInstructionsStandingInstructionIdRequest</code>.
     * PutStandingInstructionsStandingInstructionIdRequest
     * @alias module:model/PutStandingInstructionsStandingInstructionIdRequest
     */
    constructor() { 
        
        PutStandingInstructionsStandingInstructionIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutStandingInstructionsStandingInstructionIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutStandingInstructionsStandingInstructionIdRequest} obj Optional instance to populate.
     * @return {module:model/PutStandingInstructionsStandingInstructionIdRequest} The populated <code>PutStandingInstructionsStandingInstructionIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutStandingInstructionsStandingInstructionIdRequest();

            if (data.hasOwnProperty('recurrenceInterval')) {
                obj['recurrenceInterval'] = ApiClient.convertToType(data['recurrenceInterval'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} recurrenceInterval
 */
PutStandingInstructionsStandingInstructionIdRequest.prototype['recurrenceInterval'] = undefined;






export default PutStandingInstructionsStandingInstructionIdRequest;

