

import ApiClient from '../ApiClient';

/**
 * The PutUpdateStandingInstructionChanges model module.
 * @module model/PutUpdateStandingInstructionChanges
 * @version 1.0
 */
class PutUpdateStandingInstructionChanges {
    /**
     * Constructs a new <code>PutUpdateStandingInstructionChanges</code>.
     * @alias module:model/PutUpdateStandingInstructionChanges
     */
    constructor() { 
        
        PutUpdateStandingInstructionChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutUpdateStandingInstructionChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutUpdateStandingInstructionChanges} obj Optional instance to populate.
     * @return {module:model/PutUpdateStandingInstructionChanges} The populated <code>PutUpdateStandingInstructionChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutUpdateStandingInstructionChanges();

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
PutUpdateStandingInstructionChanges.prototype['recurrenceInterval'] = undefined;






export default PutUpdateStandingInstructionChanges;

